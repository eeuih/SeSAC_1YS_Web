package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import sesac.sesac.spring.Person;

import java.util.ArrayList;

@Controller // 어노테이션?? 이거 치면 위에 꺼 import 됨 이 클래스가 컨트롤러 역할을 하려면 이걸 꼭 입력해야함
public class HelloController {

    @GetMapping("/hi") // app.get 같은 역할 괄호 안에 적힌 경로로 접속하면 아래의 함수를 실행시키겠다.
    public String getHi(Model model){
        model.addAttribute("msg", "메시지입니다.");
        // res.render("hi", model);
        model.addAttribute("utext", "<strong>utext 입니다.</strong>");
        model.addAttribute("age",25);
        return "hi"; // res.render("hi") hi라는 view 파일렌더링 ( resources > templates 경로의 )
    }

    @GetMapping("/people") // app.get 같은 역할 괄호 안에 적힌 경로로 접속하면 아래의 함수를 실행시키겠다.
    public String getPeople(Model model){
        ArrayList<Person> people = new ArrayList<Person> ();
        people.add(new Person("김철수", 24));
        people.add(new Person("김민수", 22));
        people.add(new Person("김영희", 21));
        people.add(new Person("김명수", 23));

        model.addAttribute("people", people);

        return "people"; // res.render("hi") hi라는 view 파일렌더링 ( resources > templates 경로의 )
    }
}
