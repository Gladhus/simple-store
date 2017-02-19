package ca.simplestore.server.service;

import ca.simplestore.server.dao.ProductDAO;
import ca.simplestore.server.model.ProductEntity;
import java.util.Collection;
import javax.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/products", consumes = "application/json", produces = "application/json")
public class ProductService {
    @Resource
    private ProductDAO productDao;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<ProductEntity>> getAllProducts(){
        return new ResponseEntity<>((Collection<ProductEntity>) productDao.findAll(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<ProductEntity> getProductWithId(@PathVariable Integer id){
        return new ResponseEntity<ProductEntity>(productDao.findById(id), HttpStatus.OK);
    }
}
