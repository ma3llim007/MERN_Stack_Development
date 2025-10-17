abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void;
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const sameer = new Instagram("test", "test", 4);
