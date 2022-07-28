package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.Lodging;
import com.example.airbnb.model.entity.lodging.LodgingBefore;
import com.example.airbnb.model.entity.lodging.LodgingRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LodgingRoomRepository extends JpaRepository<LodgingRoom, Long> {
    @Autowired(required = false)
    Optional<LodgingRoom> findById(Long id);

}
