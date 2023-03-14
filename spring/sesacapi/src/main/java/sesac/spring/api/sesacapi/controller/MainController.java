package sesac.spring.api.sesacapi.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.api.sesacapi.dto.UserDTO;
import sesac.spring.api.sesacapi.vo.UserVO;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "request";
    }

    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(value = "name", required = true) String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name", required = false ) String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable (value ="age", required = false) String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody
    public String postAPI3(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "이름은 : "  + name;
    }


    // 실습

    @GetMapping("/introduce/{name}")
    public String getAPI5(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "introduce";
    }

    @GetMapping("/introduce2")
    public String getAPI6(@RequestParam String name, @RequestParam String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        return "introduce";
    }

    @PostMapping("/post-test")
    public String postAPI4(@RequestParam String name, @RequestParam(value ="gender") String gender, String birth, @RequestParam(value ="interest") String interest, Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birth", birth);
        model.addAttribute("interest", interest);
        return "response";
    }

    // dto

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI(UserDTO userDTO){

        String msg = userDTO.getName() + " " + userDTO.getAge() +"!!!";
        return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO){

        String msg = userDTO.getName() + " " + userDTO.getAge() +"!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() +"!!!";
        return msg;
    }


    // vo
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI(UserVO userVO){

        String msg = userVO.getName() + " " + userVO.getAge() +"!!!";
        return msg;
    }

    @PostMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO){

        String msg = userVO.getName() + " " + userVO.getAge() +"!!!";
        return msg;
    }

    @PostMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO){
        String msg = userVO.getName() + " " + userVO.getAge() +"!!!";
        return msg;
    }

    // dto axios

    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }


    // vo axios

    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVOAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVOAPI2(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVOAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVOAPI4(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVOAPI5(@RequestBody UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }


    // 동적 폼 전송 실습
    @PostMapping("/axios/vo/axiosTest")
    @ResponseBody
    public String axiosVOAPI6(@RequestBody UserVO userVO){
        String msg = userVO.getName() + " 회원가입 성공";
        return msg;
    }

    // crud

    class User {
        String name;
        String id;
        String pw;
    }

    User user = new User();

    @GetMapping("/crud")
    public String crud(){
        return "signup";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/userInfo")
    public String userInfo(Model model){
        model.addAttribute("username", user.name);
        model.addAttribute("userid", user.id);
        model.addAttribute("userPW", user.pw);

        return "userInfo";
    }




    @PostMapping("/signUp")
    @ResponseBody
    public String signUpAPI(@RequestBody UserDTO userDTO){
        user.name = userDTO.getName();
        user.id = userDTO.getUserID();
        user.pw = userDTO.getUserPW();
        String msg = userDTO.getName() + "님 회원 가입이 완료 되었습니다.";
        System.out.println(user.id);
        System.out.println(user.pw);


        return msg;
    }

    @PostMapping("/login")
    @ResponseBody
    public String loginAPI(@RequestBody UserDTO userDTO){
        System.out.println(userDTO.getUserID());
        System.out.println(userDTO.getUserPW());

        if (user.id.equals(userDTO.getUserID()) && user.pw.equals(userDTO.getUserPW())) {
            String msg = "완료";
            return msg ;
        }
        else {String fail = "아이디나 비밀번호를 확인해주세요.";
            return fail;}

    }

    @PutMapping("/change")
    @ResponseBody
    public String changeAPI(@RequestBody UserDTO userDTO){

        user.name = userDTO.getName();
        String msg = "수정되었습니다.";
        return msg ;
    }

    @PutMapping("/delete")
    @ResponseBody
    public String deleteAPI(){
        user.name = "";
        user.id = "";
        user.pw = "";

        String msg = "회원 탈퇴 완료되었습니다.";
        return msg ;
    }
}



