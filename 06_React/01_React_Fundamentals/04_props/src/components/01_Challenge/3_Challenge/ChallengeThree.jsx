import Card from "./components/Card";

export default function ChallengeThree() {
    return (
        <>
            <Card>
                <div className="card-content">
                    <h1>Photo</h1>
                    <img
                        className="avatar"
                        src="https://i.imgur.com/OKS67lhm.jpg"
                        alt="Aklilu Lemma"
                        width={70}
                        height={70}
                    />
                </div>
            </Card>
            <Card>
                <div className="card">
                    <div className="card-content">
                        <h1>About</h1>
                        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
                    </div>
                </div>
            </Card>
        </>
    );
}