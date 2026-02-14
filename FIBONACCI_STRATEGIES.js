/**
 * Fibonacci Betting Strategy Examples for ciphersQbot
 * 
 * The Fibonacci sequence is a proven mathematical progression where each number
 * is the sum of the two preceding ones: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
 * 
 * This strategy is less aggressive than Martingale and can help manage risk
 * while still recovering losses progressively.
 */

// ============================================================================
// STRATEGY 1: Basic Fibonacci Progression on Losses
// ============================================================================
// Moves up the Fibonacci sequence on loss, resets to base on win
// Risk Level: Medium
// ============================================================================

game = "dice"
chance = 49.5
bethigh = false

basebet = 0.00000001
nextbet = basebet

// Fibonacci sequence
fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibIndex = 0

function dobet() {
    if (win) {
        // Reset to base bet on win
        fibIndex = 0
        nextbet = basebet
    } else {
        // Move up the Fibonacci sequence on loss
        fibIndex = Math.min(fibIndex + 1, fibonacci.length - 1)
        nextbet = basebet * fibonacci[fibIndex]
    }
}

// ============================================================================
// STRATEGY 2: Modified Fibonacci with Profit Target
// ============================================================================
// Resets after reaching profit target, uses Fibonacci on losses
// Risk Level: Low-Medium
// ============================================================================

game = "dice"
chance = 49.5
bethigh = false

basebet = 0.00000001
nextbet = basebet
targetProfit = 0.0001  // Stop and reset after this profit

fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
fibIndex = 0
sessionProfit = 0

function dobet() {
    if (win) {
        sessionProfit += currentprofit
        
        if (sessionProfit >= targetProfit) {
            // Target reached, reset everything
            fibIndex = 0
            sessionProfit = 0
            nextbet = basebet
            log("Target profit reached! Resetting...")
        } else {
            // Won but target not reached, go back 2 steps in sequence
            fibIndex = Math.max(0, fibIndex - 2)
            nextbet = basebet * fibonacci[fibIndex]
        }
    } else {
        sessionProfit += currentprofit  // Will be negative
        
        // Move up the Fibonacci sequence on loss
        fibIndex = Math.min(fibIndex + 1, fibonacci.length - 1)
        nextbet = basebet * fibonacci[fibIndex]
    }
}

// ============================================================================
// STRATEGY 3: Reverse Fibonacci (Increase on Wins)
// ============================================================================
// Increases bet on wins, good for winning streaks
// Risk Level: Low
// ============================================================================

game = "dice"
chance = 49.5
bethigh = false

basebet = 0.00000001
nextbet = basebet

fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
fibIndex = 0

function dobet() {
    if (win) {
        // Move up the sequence on wins (ride the winning streak)
        fibIndex = Math.min(fibIndex + 1, fibonacci.length - 1)
        nextbet = basebet * fibonacci[fibIndex]
    } else {
        // Reset on loss
        fibIndex = 0
        nextbet = basebet
    }
}

// ============================================================================
// STRATEGY 4: Fibonacci with Loss Limit
// ============================================================================
// Stops betting after reaching maximum loss limit
// Risk Level: Low (with safety)
// ============================================================================

game = "dice"
chance = 49.5
bethigh = false

basebet = 0.00000001
nextbet = basebet
maxLoss = -0.001  // Stop if losses exceed this amount

fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
fibIndex = 0

function dobet() {
    // Safety check: stop if max loss reached
    if (profit < maxLoss) {
        stop()
        log("Maximum loss reached. Stopping bot.")
        return
    }
    
    if (win) {
        // Move back 2 steps on win, or reset to base
        fibIndex = Math.max(0, fibIndex - 2)
        nextbet = basebet * fibonacci[fibIndex]
    } else {
        // Move up the sequence on loss
        fibIndex = Math.min(fibIndex + 1, fibonacci.length - 1)
        nextbet = basebet * fibonacci[fibIndex]
    }
}

// ============================================================================
// STRATEGY 5: Adaptive Fibonacci with Balance Percentage
// ============================================================================
// Adjusts bet size based on current balance (safer for bankroll management)
// Risk Level: Low
// ============================================================================

game = "dice"
chance = 49.5
bethigh = false

balancePercentage = 0.001  // 0.1% of balance as base bet
fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
fibIndex = 0

function dobet() {
    // Recalculate base bet based on current balance
    let basebet = balance * balancePercentage
    
    if (win) {
        // Go back in sequence on win
        fibIndex = Math.max(0, fibIndex - 1)
    } else {
        // Move forward in sequence on loss
        fibIndex = Math.min(fibIndex + 1, fibonacci.length - 1)
    }
    
    nextbet = basebet * fibonacci[fibIndex]
}

// ============================================================================
// OPTIMAL FIBONACCI SEQUENCES FOR DIFFERENT RISK LEVELS
// ============================================================================

/**
 * CONSERVATIVE (Lower Risk, Slower Recovery):
 * [1, 1, 2, 3, 5, 8, 13, 21]
 * - Best for: Small bankrolls, risk-averse players
 * - Recovery: Slower but safer
 */

/**
 * MODERATE (Balanced Risk/Reward):
 * [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
 * - Best for: Medium bankrolls, balanced approach
 * - Recovery: Moderate speed with acceptable risk
 */

/**
 * AGGRESSIVE (Higher Risk, Faster Recovery):
 * [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
 * - Best for: Large bankrolls, higher risk tolerance
 * - Recovery: Fast recovery but requires more capital
 */

/**
 * ULTRA-SAFE (Minimal Risk):
 * [1, 1, 1, 2, 2, 3, 3, 5, 5, 8]
 * - Best for: Very small bankrolls, maximum safety
 * - Recovery: Very slow but extremely safe
 */

// ============================================================================
// TIPS FOR MAXIMIZING WINS WITH FIBONACCI
// ============================================================================

/**
 * 1. Start with a small base bet (0.1-1% of your bankroll)
 * 2. Choose sequence length based on your bankroll size
 * 3. Set profit targets and stop when reached
 * 4. Set loss limits to protect your bankroll
 * 5. Consider going back 1-2 steps on wins (not full reset)
 * 6. Test strategies in simulation mode first
 * 7. Don't chase losses - stick to your strategy
 * 8. Take breaks after big wins or losses
 * 9. Adjust base bet based on current balance
 * 10. Use the strategy that matches your risk tolerance
 */
