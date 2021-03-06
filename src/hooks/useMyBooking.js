import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useMyBooking = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);
    useEffect(() => {
        fetch(
            `https://spooky-beast-33270.herokuapp.com/mybooking/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, []);

    const deleteBooKing = (id) => {
        fetch(`https://spooky-beast-33270.herokuapp.com/mybooking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((result) => {
                const restbooking = myBooking.filter((book) => book._id !== id);
                console.log(restbooking);
                setMyBooking(restbooking);
            });
    };

    return {
        myBooking,
        deleteBooKing
    };
};

export default useMyBooking;
