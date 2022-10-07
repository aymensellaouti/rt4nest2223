export class LoggerService {
  nbLog = 0;
  logger(message: any) {
    this.nbLog++;
    console.log('from logger : ', message);
    console.log(`j ai loggué ${this.nbLog} fois`);
  }
}
