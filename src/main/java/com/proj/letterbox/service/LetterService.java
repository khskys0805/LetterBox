package com.proj.letterbox.service;

import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.LetterList;
import com.proj.letterbox.model.User;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.LetterRepository;
import com.proj.letterbox.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class LetterService {
    @Autowired
    LetterRepository letterRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LetterBoxRepository letterBoxRepository;
    @Autowired
    UserService userService;
    @Autowired
    LetterBoxService letterBoxService;

    public Letter saveLetter(HttpServletRequest request, int letterboxIdx, Letter letter) {
        User user = userService.getUser(request);
        letter.setUser(user);
        LetterBox letterBox = letterBoxService.getLetterBoxById(letterboxIdx);
        int location = letter.getLetterlocation();

        //TODO : letterBox는 저장할 필요가 없는지 확인
        letter.setLetterBox(letterBox);
        letterRepository.save(letter);
        letterBox.getLetterList().add(new LetterList(location, letter.getLetterId(), false));
        letterBoxRepository.save(letterBox);
        return letter;
    }

    public Letter getLetter(HttpServletRequest request, int letterboxIdx, int letterIdx) {
        User user = userService.getUser(request);
        LetterBox letterBox = letterBoxService.getLetterBoxById(letterboxIdx);
        if (user == letterBox.getOwner()) {
            return letterRepository.findByLetterId(letterIdx);
        }
        else {
            return null;
        }
    }
    public List<Letter> findMyLetter(User user) {
        LetterBox letterBox = letterBoxService.findLetterBoxByUserIdx(user.getUserCode());
        List<Letter> letterList = new ArrayList<>();
        if (user == letterBox.getOwner()) {
            letterList = letterRepository.findAllByLetterBox(letterBox);
        }
        return letterList;
    }
    public List<Letter> findAllByLetterBox(LetterBox letterBox) {
        List<Letter> letterList = letterRepository.findAllByLetterBox(letterBox);
        return letterList;
    }

    public Letter addAnswer(HttpServletRequest request, int letterboxIdx, int letterIdx, String answer) {
        Letter letter = getLetter(request, letterboxIdx, letterIdx);
        letter.getAnswerList().add(answer);
        letterRepository.save(letter);
        return letter;
    }

    public boolean compareAnswer(HttpServletRequest request, int letterboxIdx, int letterIdx, String answer) {
        Letter newLetter = addAnswer(request, letterboxIdx, letterIdx, answer);
        if (newLetter.getName().equals(answer)) {
            newLetter.setCorrect(true);
            letterRepository.save(newLetter);

            return true;
        }
        return false;
    }

    public String getHint(HttpServletRequest request, int letterboxIdx, int letterIdx, int hintIdx) {
        Letter letter = getLetter(request, letterboxIdx, letterIdx);
        if (hintIdx == 1) {
            letter.setHintNum(1);
            letterRepository.save(letter);
            return letter.getHint1();
        } else if (hintIdx == 2) {
            letter.setHintNum(2);
            letterRepository.save(letter);
            return letter.getHint2();
        } else if (hintIdx == 3) {
            letter.setHintNum(3);
            letterRepository.save(letter);
            return letter.getHint3();
        } else
            return null;
    }

    public ArrayList<String> getHints(HttpServletRequest request, int letterboxIdx, int letterIdx) {
        Letter letter = getLetter(request, letterboxIdx, letterIdx);
        ArrayList<String> hints = new ArrayList<>();
        hints.add(letter.getHint1());
        hints.add(letter.getHint2());
        hints.add(letter.getHint3());
        return hints;
    }

}
