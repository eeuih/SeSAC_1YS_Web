package sesac.spring.jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import sesac.spring.jpa.domain.BoardEntity;
import sesac.spring.jpa.dto.BoardDTO;
import sesac.spring.jpa.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {
    @Autowired
    MainService mainService;

    @GetMapping("/")
    public String getLists(Model model) {
        ArrayList<BoardDTO> boardList = (ArrayList<BoardDTO>) mainService.getBoardList();
        model.addAttribute("list", boardList);
        return "main";
    }

    @PostMapping("/write")
    @ResponseBody
    public String postWrite(@RequestBody BoardDTO boardDTO, Model model) {
        BoardEntity board = new BoardEntity();
        board.setName(boardDTO.getName());
        board.setDate(boardDTO.getDate());
        mainService.insertContent(board);

        model.addAttribute("list", null);
        return "";
    }

    @PostMapping("/delete")
    @ResponseBody
    public String postDelete(@RequestBody BoardDTO boardDTO) {
        mainService.deleteContent(boardDTO);
        return "";
    }
}
