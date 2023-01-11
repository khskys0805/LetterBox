package com.proj.letterbox.controller;

import com.proj.letterbox.model.Letter;
import com.proj.letterbox.model.LetterBox;
import com.proj.letterbox.model.User;
import com.proj.letterbox.repository.LetterBoxRepository;
import com.proj.letterbox.repository.UserRepository;
import com.proj.letterbox.service.LetterBoxService;
import com.proj.letterbox.service.LetterService;
import com.proj.letterbox.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/letterbox")
public class LetterBoxController {
    @Autowired
    LetterBoxService letterBoxService;
    @Autowired
    LetterService letterService;
    @Autowired
    UserService userService;

    //조회
    @ResponseBody
    @GetMapping(value = "")
    public ResponseEntity<Object> findLetterBoxByUserIdx(HttpServletRequest request) {
        User user = userService.getUser(request);
        LetterBox getLetterBox = letterBoxService.findLetterBoxByUserIdx(user.getUserCode());
        return ResponseEntity.ok().body(getLetterBox);
    }
    //생성
    @ResponseBody
    @PostMapping(value = "")
    public ResponseEntity<Object> saveLetterBox(HttpServletRequest request, @RequestBody LetterBox letterBox) {
        User user = userService.getUser(request);
        LetterBox getLetterBox = letterBoxService.findLetterBoxByUserIdx(user.getUserCode());
        if (getLetterBox == null) {
            LetterBox newLetterBox = letterBoxService.saveLetterBox(user.getUserCode(), letterBox);
            return ResponseEntity.ok().body(newLetterBox);
        }
        else
            return ResponseEntity.badRequest().body("이미 내 복주머니가 존재합니다.");
    }

    @ResponseBody
    @PostMapping(value = "/{letterboxIdx}/letter")
    public ResponseEntity<Object> saveLetter(HttpServletRequest request, @PathVariable("letterboxIdx") int letterboxIdx, @RequestBody Letter letter) {
        Letter newLetter = letterService.saveLetter(request, letterboxIdx, letter);
        return ResponseEntity.ok().body(newLetter);
    }

    @ResponseBody
    @GetMapping(value = "/{letterboxIdx}/letter/{letterIdx}")
    public ResponseEntity<Object> getLetter(HttpServletRequest request, @PathVariable("letterboxIdx") int letterboxId, @PathVariable("letterIdx") int letterIdx) {
        Letter getLetter = letterService.getLetter(request, letterIdx, letterIdx);
        return ResponseEntity.ok().body(getLetter);
    }

}