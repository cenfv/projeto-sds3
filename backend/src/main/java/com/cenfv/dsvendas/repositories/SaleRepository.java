package com.cenfv.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cenfv.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
