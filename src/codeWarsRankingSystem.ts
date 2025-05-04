class User {
  private currRank: number;
  private currProgress: number;

  constructor() {
    this.currRank = -8;
    this.currProgress = 0;
  }

  get rank(): number {
    return this.currRank;
  }

  get progress(): number {
    return this.currProgress;
  }

  incProgress(finishedTaskRank: number): void {
    if (finishedTaskRank > 8 || finishedTaskRank < -8 || finishedTaskRank === 0) {
      throw new Error("Invalid range");
    }

    const rankToValue = (r: number): number => (r > 0 ? r + 7 : r + 8);
    const userValue = rankToValue(this.currRank);
    const taskValue = rankToValue(finishedTaskRank);

    const difference = taskValue - userValue;

    if (difference === 0) {
      this.currProgress += 3;
    } else if (difference === -1) {
      this.currProgress += 1;
    } else if (difference > 0) {
      this.currProgress += 10 * difference * difference;
    } else {
      return;
    }

    while (this.currProgress >= 100 && this.currRank < 8) {
      this.currProgress -= 100;
      this.currRank += 1;

      if (this.currRank === 0) {
        this.currRank = 1;
      }
    }

    if (this.currRank === 8) {
      this.currProgress = 0;
    }
  }
}
