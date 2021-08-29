import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './user/Task';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Books: Task[], searchValue: string): Task[] {
    if (!Books || !searchValue) {
      return Books;
    }
    return Books.filter(book => 
      book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      book.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      book.created.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      book.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 



    
    )      
  }

}
