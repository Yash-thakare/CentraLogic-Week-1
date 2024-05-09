export function commands(handshake: number): string[] {
    const commands = ['wink', 'double blink', 'close your eyes', 'jump'];
    const result = [];
  
    for (let i = 0; i < 4; i++) {
      if (handshake & (1 << i)) {
        result.push(commands[i]);
      }
    }
  
    if (handshake & (1 << 4)) {
      result.reverse();
    }
  
    return result;
  }