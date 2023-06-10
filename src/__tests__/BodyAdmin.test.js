import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { UserContext } from '../UserContext';
import { Body } from '../components/AdminPageComponents/Body';
import userEvent from '@testing-library/user-event';

describe('(Component) BodyAdmin', ()=>{
    it('shouldRenderLogoutButton',()=>{
        render(
            <UserContext.Provider value={{user: {auth: false}}}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Body/>}
                        />
                    </Routes>
                </MemoryRouter>
            </UserContext.Provider>)
        const logoutButton = screen.getByText(/Wyloguj się/i)
        expect(logoutButton).toBeInTheDocument()
    })
    it('shouldRunFunctionWhenLogoutButtonClicked',async()=>{
        const onClick = jest.fn(()=>{
            console.log('Working')
        })
        render(
            <UserContext.Provider value={{user: {auth: false}}}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Body/>}
                        />
                    </Routes>
                </MemoryRouter>
            </UserContext.Provider>)
        const logoutButton = screen.getByText(/Wyloguj się/i)
        act(() => {
            userEvent.click(logoutButton);
        });
        waitFor(() => {
            expect(onClick).toBeCalled()
        });
    })
})

