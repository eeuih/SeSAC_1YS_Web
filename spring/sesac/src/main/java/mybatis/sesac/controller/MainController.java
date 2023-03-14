package mybatis.sesac.controller;

import mybatis.sesac.domain.User;
import mybatis.sesac.dto.UserDTO;
import mybatis.sesac.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@Controller
public class MainController {
    @Autowired
    MainService mainService; // 의존성 주입


    @GetMapping("/users")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("/user/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model){
        User user = new User();
        user.setName(name);
        user.setNickname(nickname);

        mainService.addUser(user);

        model.addAttribute("list", null);
        return "user";
    }

    // CRUD 실습

    @GetMapping("/crud")
    public String crud(){
        return "signup";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @PostMapping("/signUp")
    @ResponseBody
    public String signUpAPI(@RequestBody UserDTO userDTO){

        User user = new User();
        user.setName(userDTO.getName());
        user.setNickname(userDTO.getNickname());
        user.setUserid(userDTO.getUserid());
        user.setPassword(userDTO.getPassword());
        mainService.addUser(user);
        String msg = "완료";
        return msg ;
        //return "user";
    }

    @PostMapping("/login")
    @ResponseBody
    public String loginAPI(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setUserid(userDTO.getUserid());
        user.setPassword(userDTO.getPassword());
        String result = mainService.loginUser(user);
        System.out.println(result);

        // ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();

        //System.out.println(userList);

      if (result == null || result.isEmpty()) {
            String fail = "아이디나 비밀번호를 확인해주세요.";
            return fail;
        } else {
            String curreutUser = result;
            return curreutUser;
          // 로컬 말고 세션으로 처리하기..


      }
    }



    @GetMapping("/userInfo")
    public String userInfo(){
        return "userInfo";
    }

    @PostMapping("/userInfo")
    @ResponseBody
    public String userInfo(@RequestBody UserDTO userDTO){

        User user = new User();
        user.setUserid(userDTO.getUserid());
        System.out.println(user.getUserid());
        return "userInfo";
    }
}

