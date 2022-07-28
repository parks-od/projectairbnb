package com.example.airbnb.repository;

import com.example.airbnb.model.entity.lodging.LodgingBefore;
import com.example.airbnb.model.entity.lodging.LodgingPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LodgingPriceRepository extends JpaRepository<LodgingPrice, Long> {
}
