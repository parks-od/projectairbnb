package com.example.airbnb.repository.lodging;

import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.lodging.LodgingBefore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LodgingBeforeRepository extends JpaRepository <LodgingBefore, Long> {

}
