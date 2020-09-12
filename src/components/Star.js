import styled from "styled-components";

export function Star(){

    // this.starWidth = this.rating * 75 / 5;

    return(
        <StarContainer class="crop"
        // [style.width.px]="starWidth"
        // [title]="rating"
        // (click)="onClick()"
        >
            <div style="width: 75px">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
        </StarContainer>
    )
}

const StarContainer = styled.button`
.crop {overflow: hidden;}
div {cursor: pointer;}'
`;
