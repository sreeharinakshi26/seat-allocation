function toggleSeat(seat) {
    seat.classList.toggle('selected');
}

document.getElementById('confirm').addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length > 0) {
        const seatNumbers = Array.from(selectedSeats).map((seat, index) => index + 1);
        alert('Selected seats: ' + seatNumbers.join(', '));
    } else {
        alert('No seats selected');
    }
});
