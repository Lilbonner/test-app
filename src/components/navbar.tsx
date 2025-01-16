import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import s from "./navbar.module.css";

interface NavbarProps {
    search: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    category: string;
    handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomNavbar: React.FC<NavbarProps> = ({ search, handleSearch, category, handleCategoryChange }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={s.navbar}>
            <Container fluid>
                <Navbar.Brand href="#" className={s.brand}>Product Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto p-2"></Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={search}
                            onChange={handleSearch}
                        />
                        <select value={category} onChange={handleCategoryChange} className={s.category}>
                            <option value="">all categories</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Meat">Meat</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Sweets">Sweets</option>
                        </select>
                        <Button variant="outline-success" className={s.button}>Favorite</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
