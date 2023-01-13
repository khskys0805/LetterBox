package com.proj.letterbox.repository;

import com.proj.letterbox.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByEmail(String email);
    public User findByUserCode(Integer userCode);
}

