import {
  Body,
  Delete,
  Inject,
  Injectable,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { AddTodoDto } from './dto/add-todo.dto';
import { log, logProperty } from './decorator/log.decorator';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  @Inject('FACTORY_EXAMPLE_PROVIDER') private readonly exampleFactoryService;
  @Inject('UUID') private readonly uuid;
  @Inject('TODOS_LIST') todoList;
  @logProperty
  private todos: Todo[] = [];
  getTodos(): Todo[] {
    return this.todos;
  }
  findTodoById(id: string): Todo {
    return this.getTodoById(id);
  }
  addTodo(partialTodo: AddTodoDto): Todo {
    console.log('is AddTodoDto');
    console.log(partialTodo instanceof AddTodoDto);
    const { name, description, priority } = partialTodo;
    const todo = new Todo();
    todo.id = this.uuid();
    todo.name = name;
    todo.description = description;
    todo.priority = priority ?? todo.priority;
    this.todos.push(todo);
    return todo;
  }
  deleteTodo(id: string) {
    const oldlength = this.todos.length;
    this.todos = this.todos.filter((todo) => todo.id != id);
    if (this.todos.length == oldlength) {
      throw new NotFoundException();
    }
    return { number: 1 };
  }

  updateTodo(id: string, partialTodo: UpdateTodoDto): Todo {
    const todo = this.getTodoById(id);
    const { name, description, status, priority } = partialTodo;
    todo.name = name ?? todo.name;
    todo.description = description ?? todo.description;
    todo.priority = priority ?? todo.priority;
    todo.status = status ?? todo.status;
    return todo;
  }
  @log
  private getTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }
}
