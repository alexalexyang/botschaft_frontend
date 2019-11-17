import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const mapContainer = useRef(null);

    const mapStyle = [{ name: "Default", url: "mapbox://styles/mapbox/streets-v11" },
    { name: "Ice Cream", url: "mapbox://styles/alexalexyang/ck2yzsgqm06341cqkj2db6lzb" },
    { name: "North Star", url: "mapbox://styles/alexalexyang/ck2yzr62m0ayb1cs5j2z5x0o1" },
    { name: "Minimo", url: "mapbox://styles/alexalexyang/ck2yzr62m0ayb1cs5j2z5x0o1" },
    { name: "Pencil", url: "mapbox://styles/alexalexyang/ck2yzn26r37y61cq3nnepohy3" },
    { name: "Decimal", url: "mapbox://styles/alexalexyang/ck2ytcm1r3qej1cmcvp0efdfw" },
    { name: "Bubble", url: "mapbox://styles/alexalexyang/ck2zk0mcg04tk1csc3bootap2" },
    { name: "Le Shine", url: "mapbox://styles/alexalexyang/ck2zk1svy04uh1co8oo774ac2" },
    { name: "Cali Terrain", url: "mapbox://styles/alexalexyang/ck2zk3sc904w81coagx3drbi6" },
    { name: "Moonlight", url: "mapbox://styles/alexalexyang/ck2zk4ycs04xd1clayflb67ro" },
    { name: "Mineral", url: "mapbox://styles/alexalexyang/ck2zk64ry04z31cl4ztexzdit" }]

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle[Math.floor(Math.random() * mapStyle.length)].url,
            center: [0, 0],
            zoom: 5
        });

        let testArray = [{ lat: 0, lon: 0 }, { lat: 0.001, lon: 1.5 }]

        testArray.map(item => {
            new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat([item.lon, item.lat])
                .setHTML(`<h3>HELLO</h3>`)
                .addTo(map);
        })

    }, []);
    return (
        <div className="map">
            <div ref={el => (mapContainer.current = el)} className="mapContainer" />
        </div>
    );
}
