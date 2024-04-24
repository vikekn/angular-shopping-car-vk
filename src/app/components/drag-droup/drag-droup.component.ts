import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-drag-droup',
  templateUrl: './drag-droup.component.html',
  styleUrls: ['./drag-droup.component.css']
})
export class DragDroupComponent {
  FrutaList: string[]  = [
    'Comprar Fresas',
    'Comprar Cerezas',
    'Comprar Peras',
    'Comprar Bananas',
    'Comprar Sandias'
  ];
  FrutaRecordar: any[] = [];
  FrutaRecordar2: any [] = [];
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        );
  
       
    }
    
  }  
  
  
}
