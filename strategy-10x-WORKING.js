// ========================================
// 10x OR BUST - WORKING VERSION
// ========================================
// Goal: Hit 10x multiplier with all-in bets
// Win chance: 9.9% per session
// 5 attempts = 41% success probability
// ========================================

game = "limbo"
target = 10.00  // 10x multiplier

// ⚠️ CONFIGURE: What % of balance to bet (or use fixed amount below)
betPercentage = 0.20  // Bet 20% of your balance per session

// Session tracking
sessionNumber = 1
totalSessions = 5
startingBalance = 0
firstBet = 0

// Statistics
startTime = Date.now()
sessionStartTime = Date.now()

dobet = function() {

  // First bet: record starting balance
  if (bets === 0) {
    startingBalance = balance
    firstBet = balance * betPercentage
    nextbet = firstBet

    log("════════════════════════════════════════")
    log("🎰 10x OR BUST - SESSION " + sessionNumber)
    log("════════════════════════════════════════")
    log("💰 Starting balance: " + startingBalance.toFixed(8))
    log("💰 Bet amount: " + nextbet.toFixed(8) + " (" + (betPercentage * 100) + "%)")
    log("🎯 Target: 10x multiplier")
    log("📊 Win chance: 9.9%")
    log("📊 Remaining attempts: " + (totalSessions - sessionNumber + 1))
    log("════════════════════════════════════════")
    return  // Let first bet execute
  }

  // Process result
  if (win) {
    // 🎉 SUCCESS!
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let profitAmount = previousbet * target - previousbet
    let totalProfit = balance - startingBalance

    log("")
    log("════════════════════════════════════════")
    log("🎉🎉🎉 10x HIT! 🎉🎉🎉")
    log("════════════════════════════════════════")
    log("💰 Bet: " + previousbet.toFixed(8) + " crypto")
    log("💰 Won: " + (previousbet * target).toFixed(8) + " crypto")
    log("💰 Profit this round: +" + profitAmount.toFixed(8))
    log("💰 Total profit: +" + totalProfit.toFixed(8))
    log("📊 Won on session " + sessionNumber + " / " + totalSessions)
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("")
    log("💵 ACTION: CASH OUT NOW!")
    log("🛑 STOP PLAYING - You won!")
    log("🎯 You beat " + ((1 - (1 / Math.pow(1 / 0.099, sessionNumber))) * 100).toFixed(1) + "% of players")
    log("════════════════════════════════════════")

    stop()

  } else {
    // ❌ LOSS
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let totalLost = startingBalance - balance

    log("")
    log("════════════════════════════════════════")
    log("❌ Session " + sessionNumber + " LOST")
    log("════════════════════════════════════════")
    log("💸 Lost: " + previousbet.toFixed(8) + " crypto")
    log("💸 Total lost: " + totalLost.toFixed(8) + " crypto")
    log("💰 Balance: " + balance.toFixed(8) + " crypto")
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")

    if (sessionNumber >= totalSessions) {
      // 🛑 ALL SESSIONS EXHAUSTED
      let totalTime = (Date.now() - startTime) / 1000
      let finalLoss = startingBalance - balance

      log("")
      log("🛑🛑🛑 ALL 5 SESSIONS EXHAUSTED 🛑🛑🛑")
      log("════════════════════════════════════════")
      log("📊 Sessions attempted: " + totalSessions)
      log("📊 Sessions won: 0")
      log("📊 Sessions lost: " + totalSessions)
      log("💸 Total loss: -" + finalLoss.toFixed(8) + " crypto")
      log("💸 Started: " + startingBalance.toFixed(8))
      log("💸 Ended: " + balance.toFixed(8))
      log("⏱️  Total time: " + (totalTime / 60).toFixed(1) + " minutes")
      log("")
      log("⚠️  5 losses = 59% probability (expected)")
      log("💡 Better luck next time!")
      log("════════════════════════════════════════")

      stop()

    } else {
      // 🔄 PREPARE NEXT SESSION
      sessionNumber++
      let remaining = totalSessions - sessionNumber + 1
      let winProbability = (1 - Math.pow(0.901, remaining)) * 100

      log("")
      log("🔄 READY FOR SESSION " + sessionNumber)
      log("════════════════════════════════════════")
      log("💪 Remaining attempts: " + remaining)
      log("💰 Current balance: " + balance.toFixed(8))
      log("💰 Next bet: " + (balance * betPercentage).toFixed(8) + " (" + (betPercentage * 100) + "%)")
      log("📊 Win probability (any remaining): " + winProbability.toFixed(1) + "%")
      log("")
      log("▶️  Click START to place next bet")
      log("════════════════════════════════════════")

      sessionStartTime = Date.now()
      stop()  // Manual restart for next session
    }
  }
}

log("════════════════════════════════════════")
log("🎰 10x OR BUST STRATEGY LOADED")
log("════════════════════════════════════════")
log("🎯 Target: 10.00x multiplier")
log("💰 Bet size: " + (betPercentage * 100) + "% of balance")
log("📊 Total sessions: " + totalSessions)
log("📊 Win chance per session: 9.9%")
log("📊 Success probability (5 attempts): 41%")
log("")
log("⚠️  HIGH RISK STRATEGY")
log("⚠️  59% chance of losing all " + totalSessions + " sessions")
log("")
log("▶️  Click START when ready")
log("════════════════════════════════════════")
