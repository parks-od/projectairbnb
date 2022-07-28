package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
import com.example.airbnb.model.entity.lodging.LodgingLocationDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LodgingLocationDetailRepository extends JpaRepository<LodgingLocationDetail, Long> {
}
