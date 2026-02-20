// ========================================
// 10x OR BUST - STAGE 2 TEST VERSION ($5 sessions)
// ========================================
// Goal: Test with real money but reduced risk
// Budget: $50 total (10 sessions of $5)
// Win chance: 9.9% per session
// Success probability: 65% (at least 1 win in 10 tries)
// ⚠️ CONSERVATIVE TESTING - Lower risk than production
// ========================================

game = "limbo"
target = 10.00  // 10x multiplier
sessionBankroll = 5  // $5 per session (CONSERVATIVE AMOUNT)
nextbet = sessionBankroll  // All-in every session

// Session tracking
sessionNumber = 1
totalSessions = 10  // More attempts = higher success rate
totalCapital = 50  // $50 total budget

// Statistics
startTime = Date.now()
sessionStartTime = Date.now()

dobet = function() {
  if (win) {
    // SUCCESS!
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let profit = nextbet * target - nextbet
    let totalInvested = sessionNumber * sessionBankroll

    log("════════════════════════════════════════")
    log("🎉🎉🎉 10x HIT! SESSION " + sessionNumber + " SUCCESS! 🎉🎉🎉")
    log("════════════════════════════════════════")
    log("💰 Bet amount: $" + nextbet.toFixed(2))
    log("💰 Payout: $" + (nextbet * target).toFixed(2))
    log("💰 Round profit: $" + profit.toFixed(2))
    log("💵 Total invested: $" + totalInvested.toFixed(2))
    log("💵 Net profit: $" + (profit - totalInvested + sessionBankroll).toFixed(2))
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("📊 Win on attempt: " + sessionNumber + " / " + totalSessions)
    log("")
    log("✅ STAGE 2 TEST SUCCESSFUL!")
    log("🔄 Ready for Stage 3: Production with $50 sessions")
    log("════════════════════════════════════════")

    stop()



  } else {
    // LOSS
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let totalLost = sessionNumber * sessionBankroll

    log("════════════════════════════════════════")
    log("❌ Session " + sessionNumber + " LOST (-$5)")
    log("💸 Total lost so far: -$" + totalLost.toFixed(2))
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("════════════════════════════════════════")

    if (sessionNumber >= totalSessions) {
      // ALL 10 SESSIONS EXHAUSTED
      let totalTime = (Date.now() - startTime) / 1000

      log("")
      log("🔚 ALL 10 SESSIONS EXHAUSTED")
      log("════════════════════════════════════════")
      log("📊 Sessions attempted: " + totalSessions)
      log("📊 Sessions won: 0")
      log("📊 Sessions lost: " + totalSessions)
      log("💸 Total loss: -$" + totalCapital.toFixed(2))
      log("⏱️  Total time: " + (totalTime / manualcash).toFixed(1) + " minutes")
      log("")
      log("⚠️ 10 losses in a row = 35% probability (unlucky)")
      log("🤔 Decision time:")
      log("   Option A: Try 10 more sessions (not recommended)")
      log("   Option B: Move to production $50 sessions")
      log("   Option C: Stop and reassess strategy")
      log("════════════════════════════════════════")

      stop()

    } else {
      // PREPARE NEXT SESSION
      sessionNumber++
      let remaining = totalSessions - sessionNumber + 1
      let capitalRemaining = remaining * sessionBankroll
      let winProbability = (1 - Math.pow(0.901, remaining)) * 100

      log("")
      log("🔄 READY FOR SESSION " + sessionNumber)
      log("════════════════════════════════════════")
      log("💪 Remaining attempts: " + remaining)
      log("💵 Capital remaining: $" + capitalRemaining.toFixed(2))
      log("📊 Probability of winning at least once: " + winProbability.toFixed(1) + "%")
      log("")
      log("▶️  Click START to place next $5 bet")
      log("════════════════════════════════════════")

      sessionStartTime = Date.now()  // Reset session timer
      stop()  // User must manually click Start for next session
    }
  }
}

// Display initial status
log("════════════════════════════════════════")
log("🧪 STAGE 2 TEST - 10x OR BUST")
log("════════════════════════════════════════")
log("⚠️  CONSERVATIVE MODE - $5 bets, 10 attempts")
log("💰 Bet per session: $" + sessionBankroll.toFixed(2))
log("🎯 Target multiplier: " + target.toFixed(2) + "x")
log("💵 Potential win per session: $" + (sessionBankroll * target - sessionBankroll).toFixed(2))
log("📊 Total sessions: " + totalSessions)
log("📊 Total capital: $" + totalCapital.toFixed(2))
log("")
log("📈 Win chance per session: 9.9%")
log("📈 Probability of at least 1 win: 65%")
log("📈 Expected attempts to first win: 10.1")
log("")
log("🎯 Stage 2 objectives:")
log("✅ Verify real-money betting works")
log("✅ Test with reduced risk ($5 vs $50)")
log("✅ Build confidence for production")
log("✅ Experience win/loss psychology")
log("")
log("▶️  Click START to begin Session 1")
log("════════════════════════════════════════")
