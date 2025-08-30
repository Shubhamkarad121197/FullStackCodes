// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

// Input format
// First line contains an integer N, indicating the number of meetings.

// Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

// Output format
// Print the minimum number of rooms required.

// Constraints
// N <= 100000

// 0 <= S,E <= 1000000000 (10^9)

// Si < Ei

// Sample Input 1
// 3

// 0 20

// 5 10

// 10 15

// Sample Output 1
// 2

function meetingRooms(meetings) {
    
  if (!meetings || meetings.length === 0) {
        return 0;
    }

   
    let startTimes = meetings.map(meeting => meeting[0]).sort((a, b) => a - b);
    let endTimes = meetings.map(meeting => meeting[1]).sort((a, b) => a - b);

    let startPointer = 0;
    let endPointer = 0;
    let roomsInUse = 0;
    let maxRooms = 0;


    while (startPointer < meetings.length) {
        if (startTimes[startPointer] < endTimes[endPointer]) {
           
            roomsInUse++;
            startPointer++;
        } else {
           
            roomsInUse--;
            endPointer++;
        }

     
        maxRooms = Math.max(maxRooms, roomsInUse);
    }

    return maxRooms;

}
