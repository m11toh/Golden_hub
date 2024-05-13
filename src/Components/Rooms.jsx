import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://json-server-9-3i2g.onrender.com/rooms")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="rooms-container" style={{backgroundImage: `url(https://images.unsplash.com/photo-1548437983-5d3c209764a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D`}}>
            <div className="row">
                {data.map((room) => (
                    <div key={room.id} className="col-md-4 mb-4">
                        <div className="card">
                            <Link to="/booking">
                                <img src={room.image} className="card-img-top" alt="Room" />
                                <div className="card-body">
                                    <h5 className="card-title">{room.Room_type}</h5>
                                    <p className="card-text">Bed size: <u>{room.Bed_Base}</u></p>
                                    <p className="card-text">Price ${room.Price}</p>
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
