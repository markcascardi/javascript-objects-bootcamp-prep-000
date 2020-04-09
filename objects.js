
function takeANumber(queue, name) {
  queue.push(name)
  return `Welcome, ${name}. You are number ${queue.length} in line.`
}

function nowServing(queue) {
  if (queue.length > 0) {
    return `Currently serving ${queue.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(queue) {
  if (queue.length > 0) {
    var foo = []
    for (let i = 0; queue.length; i++) {
       foo += queue.length
    }
    return `The line is currently: ${foo}.`
  } else {
    return "The line is currently empty."
  }
}


// for ([initialization]; [condition]; [iteration]) {
//   [loopBody];
//  }



































//
// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name)
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
// }
//
// function nowServing(katzDeliLine) {
//   if (katzDeliLine.length > 0) {
//   return `Currently serving ${katzDeliLine.shift()}.`
//    } else {
//    return `There is nobody waiting to be served!`
//   }
// }
//
// function currentLine(katzDeliLine) {
//
//
//   returns `The line is currently: ${katzDeliLine[i]}. ${katzDeliLine}
//
//   else {
//     returns `The line is currently empty`
//   }
// }
