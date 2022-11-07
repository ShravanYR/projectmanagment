import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource,MatTreeFlattener } from '@angular/material/tree';


interface MainNode{
  name:string;
  children?:MainNode[];
}

interface ExampleFlatNode{
  expandable:boolean;
  name:string;
  level:number;
}
const TREE_DATA:MainNode[]=[
  {
    name:'>>>projects',
    children:[
      {
        name:'Project management system team_members',
        children:[{name:'anushka'},{name:'lasya'},{name:'manohar'},{name:'gouri'},{name:'shravan'},{name:'sahana'}],
      },
      {
        name:'customer management system team_members',
        children:[{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'},{name:'6'}],
      },
    ],
  },
];
  

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent   {
  title = 'treeview';
  private _transformer=(node:MainNode,level:number) => {
    return{
      expandable: !!node.children && node.children.length>0,
      name:node.name,
      level:level,
    };
  };
  constructor(){
    this.dataSource.data=TREE_DATA;
  }

  treeControl=new FlatTreeControl<ExampleFlatNode>(
    node=>node.level,
    node=>node.expandable
  );
  treeFlattener=new MatTreeFlattener(
    this._transformer,
    node=>node.level,
    node=>node.expandable,
    node=>node.children
  );
  dataSource=new MatTreeFlatDataSource(
    this.treeControl,this.treeFlattener
  )
  hasChild=(_:number,node:ExampleFlatNode)=>node.expandable;
}
