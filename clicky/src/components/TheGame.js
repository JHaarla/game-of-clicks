import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import CharCard from "./CharCard";
import images from "../futurama.json";
import Message from "./Message";

class TheGame extends Component {

    state = {
        images,
        score: 0,
        highScore: 0,
        clickedArray: [],
        message: ""
    };

    shuffleArray = (shufArr) => {
        for (let i = shufArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shufArr[i], shufArr[j]] = [shufArr[j], shufArr[i]];
        }
        return shufArr;
    };

    clickCard = id => {
        const shuffledArray = this.shuffleArray(images);
        this.setState({ images: shuffledArray });
        if (this.state.clickedArray.includes(id)) {
            this.setState({ score: 0, clickedArray: [], message: "Incorrect!! Game Over ☹️ Click an image to start again!" });
        }
        else {
            this.setState({
                clickedArray: this.state.clickedArray.concat([id]),
                score: this.state.score + 1,
                message: "Correct!! 🙂"
            });
        }
        // set highScore = score if score>highScore.
        if (this.state.score > this.state.highScore) {
            this.setState({ highScore: this.state.score });
        }
    }


    render() {

        return (
            <div id="content-wrap">
                <div>
                    <Header
                        score={this.state.score}
                        highScore={this.state.highScore}
                    />
                    <Message
                        message={this.state.message}

                    />
                    <Wrapper>


                        {this.state.images.map(img => (
                            <CharCard
                                id={img.id}
                                key={img.id}
                                imglink={img.imglink}
                                clickCard={this.clickCard}
                            />
                        ))}
                    </Wrapper>
                </div>
                <Footer />


            </div>

        )
    }
}




export default TheGame;