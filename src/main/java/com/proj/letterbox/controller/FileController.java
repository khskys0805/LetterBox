package com.proj.letterbox.controller;

import com.proj.letterbox.model.Files;
import com.proj.letterbox.service.FilesService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;

@RestController
public class FileController {
    @Autowired
    FilesService filesService;

    @RequestMapping("file/upload")
    public Files fileinsert(HttpServletRequest request, @RequestPart MultipartFile files) throws Exception {
        Files file = new Files();
        String sourceFileName = files.getOriginalFilename();
        String sourFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();
        File destinationFile;
        String destinationFileName;
        String fileUrl = "C:/Work/LetterBox/src/main/resources/static/images";

        do {
            destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + sourFileNameExtension;
            destinationFile = new File(fileUrl + destinationFileName);
        } while (destinationFile.exists());

        destinationFile.getParentFile().mkdirs();
        files.transferTo(destinationFile);

        file.setFilename(destinationFileName);
        file.setFileoriname(sourceFileName);
        file.setFileurl(fileUrl);
        filesService.save(file);
        return file;
    }


}
