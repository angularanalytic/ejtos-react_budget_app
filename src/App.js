import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Budget component here */
                            <div className='col-sm'>
                                <Budget />
                            </div>
                            
                        }        

                        {
                            /* Remaining component here*/
                            <div className='col-sm'>
                                <Remaining />
                            </div> 
                        }        

                        {
                            /* ExpenseTotal component here */
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                       <h3 className='mt-3'>Allocation</h3>
                        
                        {
                            /*ExpenseList component here */
                            
                            <div className='col-sm'> 
                                <ExpenseList/>
                            </div>

                            

                        }         
                        


                        {
                            /*ExpenseItem component here */
                            <div className='col-sm'> 
                                <ExpenseItem/>
                            </div>

                        }        
                            <h3 className='mt-3'>Change Allocation</h3>
                        {
                            /* Add AllocationForm component here under */

                            <div className='col-sm'> 
                                <AllocationForm/>
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
