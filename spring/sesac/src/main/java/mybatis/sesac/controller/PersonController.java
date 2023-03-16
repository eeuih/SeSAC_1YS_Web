package mybatis.sesac.controller;

import mybatis.sesac.dto.PersonDTO;
import mybatis.sesac.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
// @RestController 도 사용할 수 있는데, personController 안에 있는 모든 함수들에 @ResponseBody가 붙는다.
@RequestMapping("/person") // 기본 경로를 person으로 설정해 줌~
public class PersonController {
    @Autowired // 의존성 주입
    PersonService personService;
    @GetMapping("/register")
    public String getRegister(){
        return "register";
    }
    @PostMapping("/register") // 결과를 리턴해주겠다.
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO){ // DTO에 담아 놓은 값을 받아주자 ~ RequestBody를 적어줘야 axios가 잘 온다.
        personService.insertPerson(personDTO);
        System.out.println(personDTO.getId());
        return "";
    }

    @GetMapping("/login")
    public String getLogin(){
        return "personLogin";
    }

    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO) {
        PersonDTO person = personService.getPerson(personDTO);
        if ( person == null) return false;
        else return true;
    }
    @PostMapping("/info")
    public String PostInfo(PersonDTO personDTO, Model model){
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person", person);
        return "info";
    }

    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO) {
        personService.updatePerson(personDTO);
        return "";
    }

    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO) {
        personService.deletePerson(personDTO);
        return "";
    }

}
