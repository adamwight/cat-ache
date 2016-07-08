define([
	"config",
	"lib/text_statistics.js",
], function (config) { return {
	score: function (text) {
		var stats = textStatistics(text);

		switch (config.readabilityMeasure) {
		case "flesch-kincaid":
			return stats.fleschKincaidReadingEase();
		default:
			// TODO: throw exception("No readability configured.")
			return null;
		}
	}
}; });
