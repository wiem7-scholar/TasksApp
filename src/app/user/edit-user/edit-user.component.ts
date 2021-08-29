import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../Task';
import { TaskService } from 'src/app/task.service';




@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
  })
  export class EditTaskComponent implements OnInit {
      id : any;
      user: any;
      username:any;
      constructor(private route: ActivatedRoute, private router:Router, private userService: TaskService) {}
      ngOnInit(){
          this.id= this.route.snapshot.params.id;
          this.userService.getTask(this.id).subscribe( data => {
              this.user = data ;
            
          }, error => console.log(error));
      }

      onSubmit() {
          this.userService.updateTask(this.id, this.user)
          .subscribe(data => console.log(data), error => console.log(error));
          this.router.navigateByUrl('tasks');
      

      }
  
  
    }