import logMessage from './logger.js'

class CalorieTracker {
    constructor(maxCalorie) {
        this.maxCalorie = maxCalorie
        this.currentCalorie = 0
    }
    trackCalories(calorieCount) {
        this.currentCalorie += calorieCount;
        if (this.currentCalorie > this.maxCalorie) {
            logMessage('Max calories exceeded');
        }
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);