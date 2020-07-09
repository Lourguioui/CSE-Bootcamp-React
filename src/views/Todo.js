import React, { Component } from 'react';
import '../assets/todo.css';
import {
    Card,
    CardBody,
    Input,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Row,
    Col,
    Button
} from 'reactstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import TodoItem from '../components/TodoItem';
import TodoItems from '../data/Tdods.json'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.onSelectPriority = this.onSelectPriority.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.state = {
            priorities: [
                { value: 'urgent', label: 'Urgent' },
                { value: 'normal', label: 'Normal' },
                { value: 'low', label: 'Low' }
            ],
            todoItems : [],
            item: '',
            priority: '',
            status: 'pending',

        }
    }

    componentDidMount(){
        this.setState({todoItems : TodoItems.data})
    }

    onSelectPriority = value => {
        this.setState({ priority: value.value })

    }
    onChangeStatus(id, status){
        let items = [...this.state.todoItems];
        let index = items.findIndex(item => item.id === id);
        console.log("index", index)
        items[index].status = status;
        this.setState({todoItems : items})
    }
    onDeleteItem(id){
        let items = [...this.state.todoItems];
        let index = items.findIndex(item => item.id === id);
        items.splice(index,1)
        this.setState({todoItems : items})
    }

    render() {
        console.log("Todo items", this.state.todoItems)
        console.log('priority', this.state.priority)
        return (
            <Row className='todo-container d-flex justify-content-center'>
                <Col lg="6" xs="12" className='todo d-flex justify-content-center' >
                    <Card className='form-card'>
                        <CardTitle>To do list</CardTitle>
                        <CardBody>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Input
                                            placeholder='Item'
                                        />
                                    </Col>
                                    <Col>
                                        <Select
                                            options={this.state.priorities}
                                            placeholder="Priority..."
                                            onChange={this.onSelectPriority}
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </CardBody>
                        <Button
                            className="btn-block"
                            color="success"
                            style={{ borderRadius: 0 }}
                        >
                            Add item
                        </Button>

                    </Card>

                </Col>
                <Col lg="8" xs="12" className="mt-4">
                    <Card className="todo-card" outline color="white">
                        {this.state.todoItems.map(item => (
                            <TodoItem 
                                key={item.id}
                                task={item}
                                onPending = {() => this.onChangeStatus(item.id, 'pending')}
                                onDone = {() => this.onChangeStatus(item.id, 'done')}
                                onDelete = {() => this.onDeleteItem(item.id)}
                            />
                        ))

                        }
                        {/* <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem /> */}
                    </Card>
                </Col>
            </Row>
        )
    }
}
