abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('Sepia');
  }
}

const mahmud = new Instagram2('test', 'Test', 3);

mahmud.getReelTime();
