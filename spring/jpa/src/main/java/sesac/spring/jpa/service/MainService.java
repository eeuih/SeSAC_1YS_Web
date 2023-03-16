package sesac.spring.jpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.spring.jpa.domain.BoardEntity;
import sesac.spring.jpa.dto.BoardDTO;
import sesac.spring.jpa.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private BoardRepository boardRepository;

    public List<BoardDTO> getBoardList(){
        List<BoardEntity> result = boardRepository.findAll(); // select all
        List<BoardDTO> boards = new ArrayList<BoardDTO>();

        for ( int i =0; i < result.size(); i++){
            BoardDTO board = new BoardDTO();
            board.setId(result.get(i).getId());
            board.setName(result.get(i).getName());
            board.setDate(result.get(i).getDate());
            boards.add(board);
        }
        return boards;
    }

    public void insertContent(BoardEntity board) {boardRepository.save(board);}

    public void deleteContent (BoardDTO boardDTO) {boardRepository.delete(boardDTO.getId());}

}
