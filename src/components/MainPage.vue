<template>
  <div class="main-page">
    <p>Dear Romy,</p>
        <p>I realized that since you only have 30 minutes a day to use your phone, you don't have much time to look at images of us. So I made a digital scrapbook for us to look at whenever we want. Much like our love, it will be immortalized forever.</p>
        <p>I love you so very much Romy. You said it best earlier today, I miss you like the moon misses the sun. I thought your letter was so incredibly beautiful and if we're being honest here, I ALMOST shed a tear of joy (im still a tough guy)</p>
        <p>I know it hasn't been easy for you. I can only imagine what you're going through. I wish I can tell you that I understand and know how you feel but as I think about it more, I simply cannot. I cannot even imagine how bad you must feel, and the thought of you feeling this way breaks my heart. I wish I could just cure you, or obsorb all your sadness and hold it myself, even if it only makes you happy for a moment, it would be worth it to me.</p>
        <br>
        <p>But even though I might not fully comprehend the struggles and battles that are raging within your mind, the best I can do is be there for you. I promise you Romy. For as long as I am alive, I will never leave your side, no matter what sickness or what struggles God might throw at us, I will be there next to you
        You mean so much to me. I can't even put it into words. Everytime I look I you I see a future worth fightning for. I see a nice cottage house, with a warm fire on a winter day, and kids, ours kids, standing around it playing pretend.
        But most of all I see your beauty. I see your strength, your kindness, your charity, your piety, your kirkiness that leaves me smiling for hours, your honesty...</p>
        <br>
        <p>You are truly the most exceptional woman I have ever met in my life, and I truly believe that God has blessed me with the best woman in the world. Nobody comes near you.</p>
        <p>You make me so incredibly happy.</p>
        <br>
        <p>4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud.</p>
        <p>5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.</p>
        <p>6 Love does not delight in evil but rejoices with the truth.</p>
        <p>7 It always protects, always trusts, always hopes, always perseveres.</p>
        <p>1 Corinthians 13:4-8</p>
        <br>
        <p><b>YOU</b> are my love Romy, and you always will be, forever and always.</p>
        <p>Your boyfriend/husband,</p>
        <p>-Joshua</p>

  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.main-page {
  background-color: black;
  color: white;
  height: calc(100vh - 60px); /* Adjust height to account for navbar */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items to the top */
  padding: 20px; /* Add padding for mobile */
  overflow-y: auto; /* Allow scrolling if content overflows */
}

h1 {
  font-size: 2em;
  margin-bottom: 10px; /* Space below the heading */
}

p {
  font-size: 1.2em;
  text-align: center; /* Center text for better readability */
  margin: 10px 0; /* Space between paragraphs */
}

.nav-links {
  margin-top: 20px; /* Space above the links */
}

router-link {
  color: white;
  text-decoration: none;
  margin: 10px;
}

/* Responsive styles */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1.5em;
  }
}
</style>