import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import LoginForm from '../components/SignInUpPageComponents/LoginForm';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { UserContext } from '../UserContext';
import { dividerClasses } from '@mui/material';
import userEvent from '@testing-library/user-event';

describe('(Component) LoginForm', ()=>{
    
    it('shouldLinkRenderOnThePage',()=>{
        render(
            <UserContext.Provider value={{user: {auth: false}}}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route
                            path="/"
                            element={<LoginForm/>}
                        />
                    </Routes>
                </MemoryRouter>
            </UserContext.Provider>)
        const link = screen.getByTestId('link')
        expect(link).toBeInTheDocument()
    })

    it('shouldLinkRedirectWhenClicked', async ()=>{
        render(
            <UserContext.Provider value={{user: {auth: false}}}>
                <MemoryRouter initialEntries={['/home']}>
                    <Routes>
                        <Route
                            path="/home"
                            element={<LoginForm/>}
                        />
                        <Route
                            path="/"
                            element={<div>LINK TEST</div>}
                        />
                    </Routes>
                </MemoryRouter>
            </UserContext.Provider>)
        const link = screen.getByTestId('link')
        act(() => {
            userEvent.click(link);
        });
        await waitFor(() => {
            expect(screen.getByText(/LINK TEST/i)).toBeInTheDocument()
        });
    })
})

