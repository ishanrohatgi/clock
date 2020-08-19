setInterval(() => {
    d = new Date();
    hour_time = d.getHours();
    minutes_time = d.getMinutes();
    seconds_time = d.getSeconds();
    h_rot = 30 * hour_time + minutes_time / 2;
    m_rot = 6 * minutes_time;
    s_rot = 6 * seconds_time;
    h.style.transform = `rotate(${h_rot}deg)`;
    min.style.transform = `rotate(${m_rot}deg)`;
    sec.style.transform = `rotate(${s_rot}deg)`;
}, 1000);
