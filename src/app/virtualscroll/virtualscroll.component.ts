import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { TodosService } from '../todos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.css']
})
export class VirtualscrollComponent {
  title = 'virtual-scroll-demo';
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'title', 'completed'];
  private page = 1;
  private limit = 50;
  private allItemsFetched = false;
  loading = false;
  usersArray:any[] = [];
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.fetchData();
    this.fetchUersData();
  }

  fetchData(): void {
    if (this.loading || this.allItemsFetched) {
      return;
    }
    this.loading = true;

    this.todoService.getTodosData(this.page, this.limit).subscribe({
      next: (data: any[]) => {

        this.dataSource.data = [...this.dataSource.data, ...data];
        this.page++;

        if (data.length < this.limit) {
          this.allItemsFetched = true;
        }
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onScroll(): void {
    console.log("called scroll");
    
    const scrollOffset = this.viewport.measureScrollOffset('bottom');
    console.log("scrollOffset ",scrollOffset);

    if (scrollOffset < 200 && !this.loading && !this.allItemsFetched) {
      this.fetchData();
    }
  }

  fetchUersData(){
    this.todoService.getusersData().subscribe((res:any)=>{
      this.usersArray = res
      console.log("usersArray ",this.usersArray);
      
    })
  }

}
