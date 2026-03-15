import { Observable } from 'rxjs';
import { ProductCompareList } from '../../model';


export abstract class ProductCompareAdapter {
  abstract getCompareProducts(userId: string): Observable<ProductCompareList>;
  abstract addProduct(userId: string, productCode: string): Observable<ProductCompareList>;
  abstract removeProduct(userId: string, productCode: string): Observable<ProductCompareList>;
}