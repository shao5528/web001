export function setColor(value) {
    let currentColor = "";
    switch (true) {
        case value == 0:
            currentColor = "#fff";
            break;
        case value > 0 && value < 10:
            currentColor = "#FDFDCF";
            break;
        case value >= 10 && value < 100:
            currentColor = "#FE9E83";
            break;
        case value >= 100 && value < 500:
            currentColor = "#E55A4E";
            break;
        case value >= 500 && value < 10000:
            currentColor = "#4F070D";
            break;
    }
    return currentColor;
}