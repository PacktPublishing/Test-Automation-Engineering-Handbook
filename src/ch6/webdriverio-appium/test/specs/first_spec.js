describe("First Android Spec", () => {
    it ("to click element by accessibility id", async () => {
        const animationOption =  await $("~Animation");
        await animationOption.click();
        const bouncingBalls = await $("~Bouncing Balls");
        await expect(bouncingBalls).toBeExisting();
    });
});