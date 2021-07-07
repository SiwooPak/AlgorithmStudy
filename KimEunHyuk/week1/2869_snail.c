#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int a, b, v;
	scanf("%d %d %d", &a, &b, &v);
	int day = 0;

	while (1) {
		v -= a;
		if (v < 0) {
			printf("%d", day);
			break;
		}
		if (v == 0) {
			day++;
			printf("%d", day);
			break;
		}
		day++;
		v += b;
	}
}
