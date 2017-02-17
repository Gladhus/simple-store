package ca.simplestore.server.dao;

import ca.simplestore.server.model.ProductEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductDAO extends CrudRepository<ProductEntity, Long> {
    ProductEntity findById(Integer id);

    ProductEntity findByName(String name);
}
