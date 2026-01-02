// IMPRESSIVE HELEN WORLD (SAFE BLOCKS)
// Run in Minecraft chat: buildmega

player.onChat("buildmega", function () {
    const base = player.position()

    const palace = positions.add(base, pos(5, 0, 5))
    const tomb = positions.add(base, pos(70, 0, 5))
    const gallery = positions.add(base, pos(70, 0, 45))

    // ---------- helpers ----------
    function F(origin: Position, b: Block, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
        blocks.fill(b, positions.add(origin, pos(x1, y1, z1)), positions.add(origin, pos(x2, y2, z2)), FillOperation.Replace)
    }
    function P(origin: Position, b: Block, x: number, y: number, z: number) {
        blocks.place(b, positions.add(origin, pos(x, y, z)))
    }
    function hollow(origin: Position, wall: Block, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
        F(origin, wall, x1, y1, z1, x2, y2, z2)
        F(origin, Block.Air, x1 + 1, y1 + 1, z1 + 1, x2 - 1, y2 - 1, z2 - 1)
    }
    function pillar(origin: Position, b: Block, x: number, z: number, y1: number, y2: number) {
        F(origin, b, x, y1, z, x, y2, z)
    }

    // ==========================================================
    // 1) PALACE FORTRESS (big, layered, impressive)
    // ==========================================================
    // Base platform 55x55
    F(palace, Block.Sandstone, 0, 0, 0, 54, 0, 54)

    // Outer fortress walls (thick + tall)
    hollow(palace, Block.StoneBricks, 0, 1, 0, 54, 10, 54)

    // Big gate opening
    F(palace, Block.Air, 25, 1, 0, 29, 5, 0)

    // Gate "frame"
    F(palace, Block.Stone, 24, 1, 0, 24, 7, 0)
    F(palace, Block.Stone, 30, 1, 0, 30, 7, 0)
    F(palace, Block.Stone, 24, 7, 0, 30, 8, 0)

    // Corner towers (8x8 each, taller)
    hollow(palace, Block.StoneBricks, 0, 1, 0, 7, 16, 7)
    hollow(palace, Block.StoneBricks, 47, 1, 0, 54, 16, 7)
    hollow(palace, Block.StoneBricks, 0, 1, 47, 7, 16, 54)
    hollow(palace, Block.StoneBricks, 47, 1, 47, 54, 16, 54)

    // Tower tops (flat roofs)
    F(palace, Block.Stone, 1, 17, 1, 6, 17, 6)
    F(palace, Block.Stone, 48, 17, 1, 53, 17, 6)
    F(palace, Block.Stone, 1, 17, 48, 6, 17, 53)
    F(palace, Block.Stone, 48, 17, 48, 53, 17, 53)

    // Courtyard inside (warm wood floor)
    F(palace, Block.PlanksOak, 10, 0, 10, 44, 0, 44)

    // Courtyard "mosaic" (stone + sandstone stripes)
    for (let i = 12; i <= 42; i += 4) {
        F(palace, Block.Stone, i, 0, 12, i, 0, 42)
    }

    // Inner palace building (second ring)
    hollow(palace, Block.Sandstone, 14, 1, 14, 40, 9, 40)

    // Inner palace entrance (faces gate)
    F(palace, Block.Air, 26, 1, 14, 28, 4, 14)

    // Colonnade (columns) around inner palace courtyard
    for (let x = 16; x <= 38; x += 3) {
        pillar(palace, Block.Stone, x, 16, 1, 6)
        pillar(palace, Block.Stone, x, 38, 1, 6)
    }
    for (let z = 19; z <= 35; z += 3) {
        pillar(palace, Block.Stone, 16, z, 1, 6)
        pillar(palace, Block.Stone, 38, z, 1, 6)
    }

    // Inner roof (flat)
    F(palace, Block.Stone, 15, 10, 15, 39, 10, 39)

    // Throne Hall inside inner palace (raised dais + throne)
    // Dais
    F(palace, Block.Stone, 22, 1, 33, 32, 1, 38)
    F(palace, Block.Stone, 24, 2, 35, 30, 2, 38)
    // Throne (gold)
    P(palace, Block.GoldBlock, 27, 3, 37)
    P(palace, Block.GoldBlock, 27, 4, 37)
    P(palace, Block.GoldBlock, 27, 5, 37)

    // Processional road (red carpet) from gate to inner entrance
    F(palace, Block.RedWool, 26, 1, 1, 28, 1, 13)

    // Lighting (torches placed symmetrically)
    for (let z = 2; z <= 12; z += 2) {
        P(palace, Block.Torch, 24, 2, z)
        P(palace, Block.Torch, 30, 2, z)
    }
    P(palace, Block.Torch, 12, 2, 12)
    P(palace, Block.Torch, 42, 2, 12)
    P(palace, Block.Torch, 12, 2, 42)
    P(palace, Block.Torch, 42, 2, 42)

    // Palace sign
    P(palace, Block.OakSign, 23, 1, -1)

    // ==========================================================
    // 2) TOMB COMPLEX (corridor + burial chamber)
    // ==========================================================
    // Tomb base
    F(tomb, Block.StoneBricks, 0, 0, 0, 34, 0, 24)

    // Outer tomb building
    hollow(tomb, Block.StoneBricks, 0, 1, 0, 34, 8, 24)

    // Entrance opening
    F(tomb, Block.Air, 16, 1, 0, 18, 3, 0)

    // Long corridor
    F(tomb, Block.Stone, 15, 0, 1, 19, 0, 14)
    F(tomb, Block.Air, 15, 1, 1, 19, 4, 14)

    // Corridor walls/ceiling
    F(tomb, Block.StoneBricks, 14, 1, 1, 14, 5, 14)
    F(tomb, Block.StoneBricks, 20, 1, 1, 20, 5, 14)
    F(tomb, Block.StoneBricks, 14, 5, 1, 20, 5, 14)

    // Burial chamber (big room)
    hollow(tomb, Block.StoneBricks, 8, 1, 14, 26, 8, 23)
    F(tomb, Block.Stone, 9, 0, 15, 25, 0, 22)

    // Sarcophagus (center)
    F(tomb, Block.Stone, 16, 1, 18, 18, 1, 20)
    F(tomb, Block.Stone, 17, 2, 19, 17, 2, 19)

    // "Sacred marker" (gold)
    P(tomb, Block.GoldBlock, 17, 3, 21)

    // Tomb lighting
    for (let z = 2; z <= 12; z += 3) {
        P(tomb, Block.Torch, 13, 2, z)
        P(tomb, Block.Torch, 21, 2, z)
    }
    P(tomb, Block.Torch, 10, 2, 16)
    P(tomb, Block.Torch, 24, 2, 16)
    P(tomb, Block.Torch, 10, 2, 22)
    P(tomb, Block.Torch, 24, 2, 22)

    // Tomb sign
    P(tomb, Block.OakSign, 14, 1, -1)

    // ==========================================================
    // 3) MASK GALLERY (museum vibe)
    // ==========================================================
    // Gallery floor
    F(gallery, Block.PlanksOak, 0, 0, 0, 30, 0, 18)

    // Gallery walls + roof
    hollow(gallery, Block.Stone, 0, 1, 0, 30, 7, 18)
    F(gallery, Block.Stone, 1, 8, 1, 29, 8, 17)

    // Entrance
    F(gallery, Block.Air, 14, 1, 0, 16, 3, 0)

    // Stage inside
    F(gallery, Block.Stone, 6, 1, 12, 24, 1, 16)
    F(gallery, Block.Stone, 10, 2, 14, 20, 2, 16)

    // 3 statues (safe block sculptures)
    function statue(origin: Position, x: number, z: number, body: Block, head: Block) {
        P(origin, Block.Stone, x, 1, z)
        P(origin, body, x, 2, z)
        P(origin, head, x, 3, z)
        P(origin, Block.Torch, x - 1, 2, z)
        P(origin, Block.Torch, x + 1, 2, z)
    }

    // Characters
    statue(gallery, 11, 14, Block.BlackWool, Block.BlackWool) // Helen
    statue(gallery, 15, 14, Block.BrownWool, Block.BrownWool) // Teucer
    statue(gallery, 19, 14, Block.GrayWool, Block.GrayWool)   // Menelaus

    // Name signs (you type text)
    P(gallery, Block.OakSign, 11, 1, 11)
    P(gallery, Block.OakSign, 15, 1, 11)
    P(gallery, Block.OakSign, 19, 1, 11)

    // Gallery sign
    P(gallery, Block.OakSign, 10, 1, -1)

    player.say("✅ IMPRESSIVE WORLD BUILT! Now write Greek labels on the signs. Command used: buildmega")
})
